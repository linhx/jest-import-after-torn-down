
const theSet = setTimeout;
// jest.spyOn(global, 'setTimeout');
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import '../test-async-exec';

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    await new Promise((res) => {
      theSet(() => {
        res(true);
      }, 2000);
    });
  });

  afterAll(async () => {
    await app.close();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
