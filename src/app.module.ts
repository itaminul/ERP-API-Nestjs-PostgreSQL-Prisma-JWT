import { Module } from '@nestjs/common';
import { HrModule } from './modules/hr.module';
import { SecurityModule } from './security/security/security.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './database/prisma/prisma.module';
import { ModulesController } from './security/modules/modules.controller';
import { ModulesModule } from './security/modules/modules.module';
import { SecurityController } from './security/security/security.controller';
import { ModulesService } from './security/modules/modules.service';
import { UserModule } from './users/user.module';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { ModulelinksModule } from './security/modulelinks/modulelinks.module'
import { ModulelinksService } from './security/modulelinks/modulelinks.service'
import { ModulelinksController } from './security/modulelinks/modulelinks.controller'
import { ModulelinksassignModule } from './security/modulelinksassign/modulelinksassign.module';
import { ModulelinksassignController } from './security/modulelinksassign/modulelinksassign.controller';
import { ModulelinksassignService } from './security/modulelinksassign/modulelinksassign.service';
import { MulterModule } from '@nestjs/platform-express';
import { ItemSetupModule } from './inventory/item-setup/item-setup.module';
import { ItemSetupService } from './inventory/item-setup/item-setup.service';
import { ItemSetupController } from './inventory/item-setup/item-setup.controller';

//https://www.loginradius.com/blog/engineering/guest-post/session-authentication-with-nestjs-and-mongodb/


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MulterModule.register({
      dest: './uploads/employee'
    }),
    PrismaModule,
    HrModule,
    SecurityModule,
    ModulesModule,
    UserModule,
    AuthModule,
    ModulelinksModule,
    ModulelinksassignModule,
    ItemSetupModule
  ],
  controllers: [
    SecurityController,
    ModulesController,
    UserController,
    ModulelinksController,
    ModulelinksassignController,
    ItemSetupController
  ],
  providers: [
    ModulesService,
    UserService,
    JwtService,
    ModulelinksService,
    ModulelinksassignService,
    ItemSetupService
  ]
})

export class AppModule { }
