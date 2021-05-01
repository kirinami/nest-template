import { Test } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
    let usersController: UsersController;

    beforeAll(async () => {
        const app = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService],
        })
            .compile();

        usersController = app.get<UsersController>(UsersController);
    });

    describe('findAll()', () => {
        it('should return "[]"', () => {
            expect(usersController.findAll()).toBe([]);
        });
    });
});
