import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

export const TypeOrm: TypeOrmModuleAsyncOptions = {
  // TODO when configf management available retrieve conn info from config management
  // imports: [ConfigModule],

  //todo cf previous todo useFactory: (config: ConfigService) => config.get('database'),
  useFactory: async () => ({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "myuser",
    password: "mypassword",
    database: "mydatabase",
    entities: ["./dist/**/*.entity.js"],
    synchronize: process.env.NODE_ENV === 'development',
    // ssl: true,

  }),
  dataSourceFactory: async (options) => {
    const dataSource = await new DataSource(options).initialize();
    return dataSource;
  },
};



