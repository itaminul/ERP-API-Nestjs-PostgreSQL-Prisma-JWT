import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUser() {
    return await this.prisma.users.findMany();
  }

  async getAllTotalUser() {
    return await this.prisma.users.aggregate({
      _count: {
        id: true,
      },
    });
  }

  async getAllActiveUsers(authUserInfo) {
    return await this.prisma.users.findMany({
      where: {
        activeStatus: true,
        orgId: authUserInfo.orgId,
      },
    });
  }

  async getAllTotalActiveUsers() {
    return await this.prisma.users.aggregate({
      _count: {
        id: true,
      },
      where: {
        activeStatus: true,
      },
    });
  }

  async getAllInActiveUsers(authUserInfo) {
    return await this.prisma.users.findMany({
      where: {
        activeStatus: false,
        orgId: authUserInfo.orgId,
      },
    });
  }

  async getAllTotalInActiveUsers() {
    return await this.prisma.users.aggregate({
      _count: {
        id: true,
      },
      where: {
        activeStatus: false,
      },
    });
  }

  async signUp(@Body() body: any) {
    const {
      username,
      password,
      mobileNumber,
      emailAddress,
      deptId,
      desigId,
      roleId,
      orgId,
    } = body;
    const saltOrRounds = 10;
    const hashedPasword = await bcrypt.hash(password, saltOrRounds);
    const data = await this.prisma.users.create({
      data: {
        username: username,
        password: hashedPasword,
        mobileNumber,
        emailAddress,
        deptId,
        desigId,
        roleId,
        orgId,
        companyId: 1,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
      },
    });
  }

  async getUserByuserName(username: string) {
    await this.prisma.users.findMany({
      where: {
        username: username,
      },
    });
  }
}
