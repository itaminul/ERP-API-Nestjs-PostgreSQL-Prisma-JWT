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
import { ModulelinksModule } from './security/modulelinks/modulelinks.module';
import { ModulelinksService } from './security/modulelinks/modulelinks.service';
import { ModulelinksController } from './security/modulelinks/modulelinks.controller';
import { ModulelinksassignModule } from './security/modulelinksassign/modulelinksassign.module';
import { ModulelinksassignController } from './security/modulelinksassign/modulelinksassign.controller';
import { ModulelinksassignService } from './security/modulelinksassign/modulelinksassign.service';
import { MulterModule } from '@nestjs/platform-express';
import { InventoryModule } from './modules/inventory.module';
import { CountriesModule } from './global-setup/countries/countries.module';
import { ItemsModule } from './inventory/setup/items/items.module';
import { MovementsModule } from './hr/movements/movements.module';
import { MovementsController } from './hr/movements/movements.controller';
import { ItemsController } from './inventory/setup/items/items.controller';
import { MovementsService } from './hr/movements/movements.service';
import { CountriesController } from './global-setup/countries/countries.controller';
import { ItemsService } from './inventory/setup/items/items.service';
import { CountriesService } from './global-setup/countries/countries.service';
import { JavascriptService } from './custom/javascript.service';
import { DivisionModule } from './global-setup/division/division.module';
import { JavascriptController } from './custom/javascript.controoler';
import { DivisionController } from './global-setup/division/division.controller';
import { DivisionService } from './global-setup/division/division.service';
import { StudentInformationModule } from './modules/admission.management.module';
import { ProductInformationModule } from './modules/ecommerce.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MulterModule.register({
      dest: './uploads/employee',
    }),
    PrismaModule,
    HrModule,
    ProductInformationModule,
    StudentInformationModule,
    InventoryModule,
    SecurityModule,
    ModulesModule,
    UserModule,
    AuthModule,
    ModulelinksModule,
    ModulelinksassignModule,
    CountriesModule,
    ItemsModule,
    MovementsModule,
    DivisionModule
  ],
  controllers: [
    JavascriptController,
    SecurityController,
    ModulesController,
    UserController,
    ModulelinksController,
    ModulelinksassignController,
    CountriesController,
    ItemsController,
    MovementsController,
    DivisionController,
    // SetupController,
  ],
  providers: [
    JavascriptService,
    ModulesService,
    UserService,
    JwtService,
    ModulelinksService,
    ModulelinksassignService,
    CountriesService,
    ItemsService,
    MovementsService,
    DivisionService,
  ],
})
export class AppModule {}
