import mongoose, { Model } from "mongoose";

export interface IShot {
    _id: string;
    _beginAt: string | undefined;
    _updatedAt: string | undefined;
    area: number | undefined;
    attack: number | boolean | undefined;
    auto: boolean | undefined;
    balls: {
        b: boolean | undefined;
        cm: {
            x: number;
            y: number;
            z: number;
        };
        index: number | undefined;
        pocketAttemp: {
            x: number;
            y: number;
        };
        points: {
            u: number | undefined;
            v: number | undefined;
            w: number | undefined;
            x: number;
            y: number;
        };
        s:
            | {
                  s: number;
                  z: number;
              }
            | undefined;
        t: boolean | undefined;
        x: number | undefined;
        y: number | undefined;
        z: number | undefined;
    }[];
    ballsCount: number | undefined;
    begin: number;
    begin2: number | undefined;
    bigArr: undefined;
    bwidth: number | undefined;
    camera: number | string;
    classes: {
        class: number;
        frame: number | undefined;
    }[];
    intersectionPoints:
        | {
              point: {
                  x: number;
                  y: number;
                  z: number;
              };
              type: string;
              videoFrame: number;
          }
        | undefined;

    compare: {
        image: string;
        model: string | undefined;
        result: string | undefined;
        time: string | undefined;
    }[];
    complexity: number | undefined;
    connects:
        | {
              ball: number;
              index: number;
              point: {
                  u: number | undefined;
                  v: number | undefined;
                  w: number | undefined;
                  x: number;
                  y: number;
                  z: number;
              };
              with: number;
          }
        | undefined;
    cut: number | undefined;
    dataset: boolean | undefined;
    date: string | undefined;
    dnn: boolean | undefined;
    drill: boolean | undefined;
    end: number | undefined;
    exitDist: number | undefined;
    f: undefined;
    faul: boolean | undefined;
    features: (string | number)[] | undefined;
    frameBalls:
        | {
              balls: number;
              frames: number;
          }[]
        | undefined;
    frames: number | undefined;
    frames2: number | undefined;
    idealCut: number | undefined;
    image: string | undefined;
    inhand: boolean | undefined;
    kframe:
        | {
              u: number | undefined;
              v: number | undefined;
              w: number | undefined;
              x: number;
              y: number;
              z: number;
          }
        | undefined;
    live: boolean | undefined;
    made: boolean | undefined;
    match: boolean | undefined;
    mid: string | undefined;
    miss: boolean | undefined;
    model: string | undefined;
    note: string | undefined;
    number: number | undefined;
    numbers: boolean | undefined;
    p: boolean | undefined;
    part: number | undefined;
    pathDist: number | undefined;
    player: string;
    playerId: string | undefined;
    pocket:
        | {
              x: number;
              y: number;
          }
        | undefined;

    pocketAttemp:
        | {
              x: number;
              y: number;
          }
        | undefined;
    pointsCloud: {
        arr: any[] | undefined;
        class: number;
        cm: {
            x: number;
            y: number;
            z: number;
        };
        conf: number | undefined;
        dyn: boolean | undefined;
        frame: number;
        point: {
            x: number;
            y: number;
            z: number;
        };
        rect: {
            width: number;
            height: number;
            y: number;
            z: number;
        };
        type: string;
    }[];
    pointsCloud2:
        | {
              class: number;
              cm: {
                  x: number;
                  y: number;
                  z: number;
              };

              frame: number;
              point: {
                  x: number;
                  y: number;
                  z: number;
              };
              rect: {
                  width: number;
                  height: number;
                  y: number;
                  z: number;
              };
          }[]
        | undefined;
    potting: boolean | undefined;
    result: string | undefined;
    safe: number | boolean | undefined;
    shotDist: number | undefined;
    shotHard: number | undefined;
    speed: number | undefined;
    stats: {
        cueBallPath: number | undefined;
        cueBallPosition:
            | {
                  x: number;
                  y: number;
                  z: number;
              }
            | undefined;
        cueBallSliding: number | undefined;
        cueTargetAngle: number | undefined;
        cueTargetDist: number;
        pocket: {
            x: number;
            y: number;
        };
        pocketAngle: number | undefined;
        pocketComplexity: number | undefined;
        speed: number | undefined;
        strength: number;
        targetBallPath: number | undefined;
        vint: number | string | undefined;
        zoneClass: string | undefined;
        zoneSide: string | undefined;
    };
    status: string | number | undefined;
    strength: number | undefined;
    t: boolean | undefined;
    targetDist: number | undefined;
    team: string | undefined;
    tracks: any[] | undefined;
    type: string | undefined;
    v: number | undefined;
    video: string;
    videoType: string | undefined;
    vint: string | undefined;
}

const Shot: Model<IShot> = mongoose.models?.Shot || mongoose.model<IShot>("Shot", new mongoose.Schema({ _id: { type: String, required: true } }, { strict: false }));

export default Shot;
