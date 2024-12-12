// import mongoose, { Connection } from "mongoose";

// const DATABASE_URIS: { [key: string]: string } = {
//     perfromstars: process.env.MONGODB_URI_PERFORMSTARS || "mongodb://localhost:27017/performstars",
//     pool: process.env.MONGODB_URI_POOL || "mongodb://localhost:27017/pool",
// };

// declare global {
//     var mongooseConnections: {
//         [key: string]: {
//             conn: Connection | null;
//             promise: Promise<Connection> | null;
//         };
//     };
// }

// // Инициализируем глобальное хранилище для кеша
// global.mongooseConnections = global.mongooseConnections || {};

// export const connectToDatabase = async (dbName: "perfromstars" | "pool"): Promise<Connection> => {
//     if (!DATABASE_URIS[dbName]) {
//         throw new Error(`No URI defined for database: ${dbName}`);
//     }

//     if (!global.mongooseConnections[dbName]) {
//         global.mongooseConnections[dbName] = { conn: null, promise: null };
//     }

//     const cached = global.mongooseConnections[dbName];

//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         const options = {
//             bufferCommands: false,
//         };

//         // Используем createConnection для создания отдельного подключения
//         cached.promise = mongoose.createConnection(DATABASE_URIS[dbName], options).asPromise();
//     }

//     try {
//         cached.conn = await cached.promise;
//     } catch (error) {
//         cached.promise = null;
//         throw error;
//     }

//     return cached.conn;
// };

// // lib/mongoose.ts
import mongoose from "mongoose";

const uriPerform = process.env.MONGODB_URI_PERFORMSTARS as string;
const uriPool = process.env.MONGODB_URI_POOL as string;

// if (!uriPerform) {
//     throw new Error("Please add your Mongo URI to .env.local");
// }

// let cachedPerform = global.mongoosePerform;

// if (!cachedPerform) {
//     cachedPerform = global.mongoosePerform = { conn: null, promise: null };
// }

// async function connectDBPerformstars() {
//     if (cachedPerform.conn) {
//         return cachedPerform.conn;
//     }

//     if (!cachedPerform.promise) {
//         const options = {
//             bufferCommands: false,
//         };

//         cachedPerform.promise = mongoose.connect(uriPerform, options).then((mongoose) => {
//             console.log("MONGO CON PERFORMSTARS ✅");
//             return mongoose;
//         });
//     }

//     cachedPerform.conn = await cachedPerform.promise;
//     return cachedPerform.conn;
// }

let cachedPool = global.mongoosePool;

if (!cachedPool) {
    cachedPool = global.mongoosePool = { conn: null, promise: null };
}

async function connectDBPool() {
    if (cachedPool.conn) {
        return cachedPool.conn;
    }

    if (!cachedPool.promise) {
        const options = {
            bufferCommands: false,
        };

        cachedPool.promise = mongoose.connect(uriPool, options).then((mongoose) => {
            console.log("MONGO CON POOL ✅");
            return mongoose;
        });
    }

    cachedPool.conn = await cachedPool.promise;
    return cachedPool.conn;
}

export {
    //connectDBPerformstars,
    connectDBPool,
};
