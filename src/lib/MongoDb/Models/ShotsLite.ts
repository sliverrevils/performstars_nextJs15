export interface IShotLite {
    _id: string;
    attack: boolean | undefined;
    balls: {
        _id: number;
        color: {
            x: number;
            y: number;
            z: number;
        };
        path: {
            x: number;
            y: number;
            z: number;
        };
        position: {
            x: number;
            y: number;
            z: number;
        };
        status: string | undefined;
    }[];
    begin: number;
    cut: number | undefined;
    end: number | undefined;
    exitDist: number | undefined;
    f: undefined;
    faul: boolean | undefined;
    frames: number | undefined;
    idealCut: number | undefined;
    inhand: boolean | undefined;
    m: boolean | undefined;
    match: boolean | undefined;
    mid: string;
    miss: boolean | undefined;
    number: number;
    pathDist: number | undefined;
    playerId: string;
    potting: boolean;
    result: string | undefined;
    shotDist: number | undefined;
    shotHard: number | undefined;
    stats: {
        cueBallPath: number;
        cueBallSliding: number;
        cueTargetAngle: number;
        cueTargetDist: number;
        pocket: {
            x: number;
            y: number;
        };
        pocketAngle: number;
        pocketComplexity: number | null | undefined;
        speed: number;
        strength: number;
        targetBallPath: number;
        vint: number | undefined;
    };
    status: string | undefined;
    strength: number | undefined;
    targetDist: number | undefined;
    type: string | undefined;
    v: boolean | undefined;
    video: string;
    viewview: string | number | undefined;
    vint: string | undefined;
}
