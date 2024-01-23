import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api/(.*)'],
    }),

    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-pokemon'),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
