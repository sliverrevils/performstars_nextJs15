export interface IDrill {
    _id: string;
    _createdAt: string;
    a: boolean;
    audio: boolean;
    author: string;
    bad: number;
    camerasMap: {
        frame: number;
        image: string;
        points: {
            x: number;
            y: number;
        };
        rails: number[];
        tableArea: number;
        tableColor: number | undefined;
    }[];
    date: string;
    day: number;
    description: string;
    download: boolean;
    drill: boolean;
    duration: number;
    fid: string;
    find: number;
    fps: number;
    frames: number;
    gameType: string;
    good: number;
    height: number;
    isProcessed: boolean | undefined;
    mindBegin: string | undefined;
    mindProg: number | undefined;
    path: string;
    player: string;
    private: string;
    sampleRate: number | undefined;
    shots: number;
    status: string;
    statusCode: number;
    tableSize: string;
    title: string;
    user: string;
    videoType: string;
    width: number;
    year: number;
}
