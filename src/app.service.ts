import { Injectable } from '@nestjs/common';

export type helloWorldTest = {
  hello: string;
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Reload teste';
  }

  getTest(): helloWorldTest {
    return {
      hello: 'World',
    };
  }
}
