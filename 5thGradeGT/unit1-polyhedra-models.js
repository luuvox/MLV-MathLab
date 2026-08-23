(() => {
  "use strict";

  const THREE = window.THREE;
  if (!THREE) return;

  const faceColors = [0x67b5aa, 0xf2b45f, 0x5e98ca, 0xd48393, 0xa8d6bc, 0xf0cf70];
  const edgeColor = 0x1f2a33;
  const viewers = new Set();

  const modelRecords = Object.freeze([
    { id: "A", source: "Blackline p.1", faces: "2 triangles and 3 rectangles", isPolyhedron: true },
    { id: "B", source: "Blackline p.2", faces: "6 squares", isPolyhedron: true },
    { id: "C", source: "Blackline p.3", faces: "2 parallelograms and 4 rectangles", isPolyhedron: true },
    { id: "D", source: "Blackline p.4", faces: "2 trapezoids and 4 rectangles", isPolyhedron: true },
    { id: "E", source: "Blackline p.5", faces: "4 triangles", isPolyhedron: true },
    { id: "F", source: "Blackline p.6", faces: "1 square and 4 triangles", isPolyhedron: true },
    { id: "G", source: "Blackline p.7", faces: "1 pentagon and 5 triangles", isPolyhedron: true },
    { id: "H", source: "Blackline p.8", faces: "4 triangles and 4 quadrilaterals", isPolyhedron: true },
    { id: "J", source: "Blackline p.9", faces: "2 pentagons and 10 triangles", isPolyhedron: true },
    { id: "K", source: "Blackline p.10", faces: "source panel set with an unclosed connection", isPolyhedron: false },
    { id: "L", source: "Student Task Statement p.1 non-example", faces: "one curved surface", isPolyhedron: false },
    { id: "M", source: "Student Task Statement p.1 non-example", faces: "two flat circles and one curved surface", isPolyhedron: false },
    { id: "N", source: "Student Task Statement p.1 non-example", faces: "one joined twisted strip", isPolyhedron: false },
    { id: "O", source: "Student Task Statement p.1 non-example", faces: "five polygon panels with the top missing", isPolyhedron: false },
  ]);

  function faceMaterial(index) {
    return new THREE.MeshStandardMaterial({
      color: faceColors[index % faceColors.length],
      roughness: 0.72,
      metalness: 0,
      side: THREE.DoubleSide,
      flatShading: true,
    });
  }

  function addPolygonFace(group, vertices, face, colorIndex) {
    const points = face.map((index) => new THREE.Vector3(...vertices[index]));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const indices = [];
    for (let index = 1; index < face.length - 1; index += 1) {
      indices.push(0, index, index + 1);
    }
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    group.add(new THREE.Mesh(geometry, faceMaterial(colorIndex)));

    const outlineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const outlineMaterial = new THREE.LineBasicMaterial({ color: edgeColor, linewidth: 1 });
    group.add(new THREE.LineLoop(outlineGeometry, outlineMaterial));
  }

  function panelGroup(vertices, faces) {
    const group = new THREE.Group();
    faces.forEach((face, index) => addPolygonFace(group, vertices, face, index));
    return group;
  }

  function regularPolygon(sides, radius = 1, rotation = Math.PI / 2) {
    return Array.from({ length: sides }, (_, index) => {
      const angle = rotation + (index * Math.PI * 2) / sides;
      return [Math.cos(angle) * radius, Math.sin(angle) * radius];
    });
  }

  function prism(points, depth = 1.5, shear = [0, 0]) {
    const halfDepth = depth / 2;
    const vertices = [
      ...points.map(([x, y]) => [x, y, -halfDepth]),
      ...points.map(([x, y]) => [x + shear[0], y + shear[1], halfDepth]),
    ];
    const count = points.length;
    const faces = [
      Array.from({ length: count }, (_, index) => count - index - 1),
      Array.from({ length: count }, (_, index) => count + index),
    ];
    for (let index = 0; index < count; index += 1) {
      const next = (index + 1) % count;
      faces.push([index, next, count + next, count + index]);
    }
    return panelGroup(vertices, faces);
  }

  function pyramid(points, height = 1.75) {
    const vertices = [
      ...points.map(([x, y]) => [x, y, -0.55]),
      [0, 0, height - 0.55],
    ];
    const apex = points.length;
    const faces = [Array.from({ length: points.length }, (_, index) => points.length - index - 1)];
    for (let index = 0; index < points.length; index += 1) {
      faces.push([index, (index + 1) % points.length, apex]);
    }
    return panelGroup(vertices, faces);
  }

  function tetrahedron() {
    const vertices = [
      [1, 1, 1],
      [-1, -1, 1],
      [-1, 1, -1],
      [1, -1, -1],
    ];
    return panelGroup(vertices, [[0, 2, 1], [0, 1, 3], [0, 3, 2], [1, 2, 3]]);
  }

  function gyrobifastigium() {
    const h = Math.sqrt(3);
    const vertices = [
      [-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0],
      [-1, 0, h], [1, 0, h], [0, -1, -h], [0, 1, -h],
    ];
    const faces = [
      [0, 1, 5, 4], [3, 4, 5, 2], [0, 4, 3], [1, 2, 5],
      [0, 6, 1], [3, 2, 7], [0, 3, 7, 6], [1, 6, 7, 2],
    ];
    return panelGroup(vertices, faces);
  }

  function pentagonalAntiprism() {
    const radius = 1.08;
    const halfHeight = 0.68;
    const vertices = [];
    for (let index = 0; index < 5; index += 1) {
      const angle = Math.PI / 2 + (index * Math.PI * 2) / 5;
      vertices.push([Math.cos(angle) * radius, Math.sin(angle) * radius, -halfHeight]);
    }
    for (let index = 0; index < 5; index += 1) {
      const angle = Math.PI / 2 + Math.PI / 5 + (index * Math.PI * 2) / 5;
      vertices.push([Math.cos(angle) * radius, Math.sin(angle) * radius, halfHeight]);
    }
    const faces = [[4, 3, 2, 1, 0], [5, 6, 7, 8, 9]];
    for (let index = 0; index < 5; index += 1) {
      const next = (index + 1) % 5;
      const previousTop = 5 + ((index + 4) % 5);
      faces.push([index, 5 + index, previousTop]);
      faces.push([index, next, 5 + index]);
    }
    return panelGroup(vertices, faces);
  }

  function sourceFigureK() {
    const vertices = [
      [-0.7, -0.7, 0], [0.7, -0.7, 0], [0.7, 0.7, 0], [-0.7, 0.7, 0],
      [-1.5, -1.15, -0.8], [-2.2, -0.7, -1.5], [-2.2, 0.7, -1.5], [-1.5, 1.15, -0.8],
      [0, 1.45, 0.95], [0, -1.45, -0.95], [1.65, 0, 0.85],
      [1, 1.35, 1.4], [1.2, 2, 0.7], [1.85, 0.65, 0.15],
      [1, -1.35, -0.6], [1.95, -0.65, 0.25], [2.6, 0, 1.4],
    ];
    const faces = [
      [0, 4, 5, 6, 7, 3], [0, 1, 2, 3], [3, 2, 8], [0, 9, 1], [1, 10, 2],
      [2, 11, 10], [11, 12, 13, 10], [1, 14, 15, 10], [10, 15, 16],
    ];
    return panelGroup(vertices, faces);
  }

  function curvedMesh(geometry, color = faceColors[0]) {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.74,
      metalness: 0,
      side: THREE.DoubleSide,
    });
    group.add(new THREE.Mesh(geometry, material));
    return group;
  }

  function threeTwistStrip() {
    const radialSegments = 96;
    const widthSegments = 8;
    const positions = [];
    const indices = [];
    for (let row = 0; row <= radialSegments; row += 1) {
      const u = (row / radialSegments) * Math.PI * 2;
      for (let column = 0; column <= widthSegments; column += 1) {
        const v = ((column / widthSegments) - 0.5) * 0.72;
        const twist = (3 * u) / 2;
        const radius = 1.35 + v * Math.cos(twist);
        positions.push(
          radius * Math.cos(u),
          radius * Math.sin(u),
          v * Math.sin(twist)
        );
      }
    }
    const stride = widthSegments + 1;
    for (let row = 0; row < radialSegments; row += 1) {
      for (let column = 0; column < widthSegments; column += 1) {
        const a = row * stride + column;
        const b = a + 1;
        const c = a + stride;
        const d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return curvedMesh(geometry, faceColors[3]);
  }

  function openTopBox() {
    const vertices = [
      [-1, -0.78, -0.72], [1, -0.78, -0.72], [1, 0.78, -0.72], [-1, 0.78, -0.72],
      [-1, -0.78, 0.72], [1, -0.78, 0.72], [1, 0.78, 0.72], [-1, 0.78, 0.72],
    ];
    return panelGroup(vertices, [
      [3, 2, 1, 0], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7],
    ]);
  }

  function modelForId(id) {
    switch (id) {
      case "A": return prism(regularPolygon(3, 1.05), 1.6);
      case "B": return prism([[-1, -1], [1, -1], [1, 1], [-1, 1]], 2);
      case "C": return prism([[-1.15, -0.78], [0.55, -0.78], [1.15, 0.78], [-0.55, 0.78]], 1.55, [0.32, 0.08]);
      case "D": return prism([[-1.1, -0.8], [1.1, -0.8], [0.68, 0.8], [-0.68, 0.8]], 1.55);
      case "E": return tetrahedron();
      case "F": return pyramid([[-1, -1], [1, -1], [1, 1], [-1, 1]], 2.05);
      case "G": return pyramid(regularPolygon(5, 1.08), 2.05);
      case "H": return gyrobifastigium();
      case "J": return pentagonalAntiprism();
      case "K": return sourceFigureK();
      case "L": return curvedMesh(new THREE.SphereGeometry(1.05, 48, 32), faceColors[4]);
      case "M": return curvedMesh(new THREE.CylinderGeometry(0.9, 0.9, 1.9, 64), faceColors[2]);
      case "N": return threeTwistStrip();
      case "O": return openTopBox();
      default: return prism(regularPolygon(3, 1.05), 1.6);
    }
  }

  function disposeObject(object) {
    object.traverse((child) => {
      child.geometry?.dispose?.();
      if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose?.());
      else child.material?.dispose?.();
    });
  }

  function fitModel(model) {
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    model.position.sub(center);
    const largest = Math.max(size.x, size.y, size.z, 0.001);
    model.scale.setScalar(2.75 / largest);
  }

  function mountCanvas(canvas) {
    if (canvas.__polyhedronViewer) return canvas.__polyhedronViewer;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
    renderer.setClearColor(0xf8fbfb, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xcbd8de, 1.55));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
    keyLight.position.set(4, 5, 7);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xf5c878, 0.5);
    fillLight.position.set(-4, -2, 4);
    scene.add(fillLight);

    const modelId = canvas.dataset.polyhedronModel || "A";
    const model = modelForId(modelId);
    fitModel(model);
    model.rotation.order = "YXZ";
    const defaultRotation = modelId === "K" ? [-0.52, 1.08, 0] : [-0.32, 0.55, 0];
    model.rotation.set(...defaultRotation);
    scene.add(model);

    const viewer = {
      canvas,
      renderer,
      scene,
      camera,
      model,
      defaultRotation,
      pointer: null,
      renderCount: 0,
      resizeObserver: null,
      listeners: [],
    };

    const render = () => {
      const width = Math.max(240, Math.round(canvas.clientWidth || 640));
      const height = Math.max(190, Math.round(canvas.clientHeight || 380));
      const pixelWidth = Math.round(width * renderer.getPixelRatio());
      const pixelHeight = Math.round(height * renderer.getPixelRatio());
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      renderer.render(scene, camera);
      viewer.renderCount += 1;
      canvas.dataset.renderReady = "true";
      canvas.dataset.renderCount = String(viewer.renderCount);
    };

    const listen = (target, type, handler, options) => {
      target.addEventListener(type, handler, options);
      viewer.listeners.push([target, type, handler, options]);
    };

    listen(canvas, "pointerdown", (event) => {
      viewer.pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
      canvas.setPointerCapture?.(event.pointerId);
      event.preventDefault();
    });
    listen(canvas, "pointermove", (event) => {
      if (!viewer.pointer || viewer.pointer.id !== event.pointerId) return;
      const dx = event.clientX - viewer.pointer.x;
      const dy = event.clientY - viewer.pointer.y;
      viewer.pointer.x = event.clientX;
      viewer.pointer.y = event.clientY;
      model.rotation.y += dx * 0.012;
      model.rotation.x = THREE.MathUtils.clamp(model.rotation.x + dy * 0.01, -1.25, 1.25);
      render();
      event.preventDefault();
    });
    const endPointer = (event) => {
      if (viewer.pointer?.id === event.pointerId) viewer.pointer = null;
    };
    listen(canvas, "pointerup", endPointer);
    listen(canvas, "pointercancel", endPointer);
    listen(canvas, "wheel", (event) => {
      camera.position.z = THREE.MathUtils.clamp(camera.position.z + Math.sign(event.deltaY) * 0.4, 4.2, 8.2);
      render();
      event.preventDefault();
    }, { passive: false });
    listen(canvas, "keydown", (event) => {
      const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "+", "=", "-", "0"];
      if (!keys.includes(event.key)) return;
      if (event.key === "ArrowLeft") model.rotation.y -= 0.2;
      if (event.key === "ArrowRight") model.rotation.y += 0.2;
      if (event.key === "ArrowUp") model.rotation.x -= 0.16;
      if (event.key === "ArrowDown") model.rotation.x += 0.16;
      if (event.key === "+" || event.key === "=") camera.position.z = Math.max(4.2, camera.position.z - 0.4);
      if (event.key === "-") camera.position.z = Math.min(8.2, camera.position.z + 0.4);
      if (event.key === "0") {
        model.rotation.set(...viewer.defaultRotation);
        camera.position.z = 6.2;
      }
      model.rotation.x = THREE.MathUtils.clamp(model.rotation.x, -1.25, 1.25);
      render();
      event.preventDefault();
    });

    if (window.ResizeObserver) {
      viewer.resizeObserver = new ResizeObserver(render);
      viewer.resizeObserver.observe(canvas);
    } else {
      listen(window, "resize", render);
    }

    viewer.render = render;
    canvas.__polyhedronViewer = viewer;
    viewers.add(viewer);
    render();
    return viewer;
  }

  function control(button) {
    const workspace = button.closest(".polyhedron-sort-workspace");
    const canvas = workspace?.querySelector("[data-polyhedron-canvas]");
    const viewer = canvas?.__polyhedronViewer;
    if (!viewer) return;
    const action = button.dataset.polyhedronView;
    if (action === "left") viewer.model.rotation.y -= 0.28;
    if (action === "right") viewer.model.rotation.y += 0.28;
    if (action === "up") viewer.model.rotation.x = Math.max(-1.25, viewer.model.rotation.x - 0.2);
    if (action === "down") viewer.model.rotation.x = Math.min(1.25, viewer.model.rotation.x + 0.2);
    if (action === "zoom-in") viewer.camera.position.z = Math.max(4.2, viewer.camera.position.z - 0.45);
    if (action === "zoom-out") viewer.camera.position.z = Math.min(8.2, viewer.camera.position.z + 0.45);
    if (action === "reset") {
      viewer.model.rotation.set(...viewer.defaultRotation);
      viewer.camera.position.z = 6.2;
    }
    viewer.render();
    canvas.focus({ preventScroll: true });
  }

  function disposeViewer(viewer) {
    viewer.resizeObserver?.disconnect();
    viewer.listeners.forEach(([target, type, handler, options]) => target.removeEventListener(type, handler, options));
    disposeObject(viewer.model);
    viewer.renderer.dispose();
    viewer.renderer.forceContextLoss?.();
    delete viewer.canvas.__polyhedronViewer;
    viewers.delete(viewer);
  }

  function disposeAll() {
    [...viewers].forEach(disposeViewer);
  }

  function mountAll(root = document) {
    root.querySelectorAll("[data-polyhedron-canvas]").forEach(mountCanvas);
  }

  window.Unit1Polyhedra = Object.freeze({
    control,
    disposeAll,
    mountAll,
    records: modelRecords,
  });
})();
