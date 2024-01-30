
const getConfig = () => ({
    mongodbUri: process.env.MONGODB_URI,
    apiUser: process.env.HTTP_BASIC_USER,
    apiPassword: process.env.HTTP_BASIC_PASS,
} as const);

export type EnvironmentConfig = ReturnType<typeof getConfig>;

export default getConfig;
