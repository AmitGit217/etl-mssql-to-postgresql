import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getAllUsers() {
    return prisma.user.findMany({});
  }

  async getAllPosts() {
    return prisma.post.findMany({});
  }

  async getPostsByUserId(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        posts: true,
      },
    });
  }
}
