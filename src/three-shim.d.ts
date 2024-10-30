declare module 'three/examples/jsm/controls/OrbitControls' {
    export class OrbitControls {
        constructor(object: any, domElement: any);
        enableDamping: boolean;
        dampingFactor: number;
        maxDistance: number;
        minDistance: number;
        enablePan: boolean;
        enableRotate: boolean; // Agregamos enableRotate
        update(): void;
    }
}

declare module 'three/examples/jsm/loaders/OBJLoader' {
    export class OBJLoader {
        load(url: string, onLoad: (object: any) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    }
}

declare module 'three/examples/jsm/loaders/MTLLoader' {
    export class MTLLoader {
        load(url: string, onLoad: (materials: any) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    }
}
