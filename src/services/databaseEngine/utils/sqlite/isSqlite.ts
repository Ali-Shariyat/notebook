import databaseEngine from "../../../../configs/databaseConfig";

const isSqlite = () => databaseEngine === "sqlite";

export default isSqlite;
