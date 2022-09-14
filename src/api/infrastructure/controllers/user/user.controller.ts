import {Body, Controller, Get, Param, ParseIntPipe, Post, Query} from '@nestjs/common';
import {UserUseCases} from "../../../use-cases/user/user.use-case";
import {CreateUserDto} from "./dtos/user.dto";
import {CreateUserResponseDto} from "./dtos/create-user-response.dto";
import {UserFactoryService} from "../../../use-cases/user/user-factory.service";
import {IPaginationService} from "../../../core/abstracts/adapters/pagination.interface";
import {PaginationResponseDto} from "../../common/dtos/api-pagination-response.dto";
import {User, UserWithoutRefreshToken} from "../../../core/entities/user.entity";

@Controller('user')
export class UserController {
  constructor(
    private userUseCases: UserUseCases,
    private userFactoryService: UserFactoryService,
    private paginationService: IPaginationService
  ) {}

  @Get()
  async getAll(@Query() query) : Promise<PaginationResponseDto> {
    const getAllUserResponseDto = new PaginationResponseDto();

    const params = this.paginationService.getParams(query);
    const { rows, count } = await this.userUseCases.getAllUsers(params.options);

    getAllUserResponseDto.total = count
    getAllUserResponseDto.page = params.page
    getAllUserResponseDto.pages = Math.ceil(count / params.limit)
    getAllUserResponseDto.rows = rows

    return getAllUserResponseDto;
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<UserWithoutRefreshToken> {
    const user: User = await this.userUseCases.getUserById(id);
    if(user !== null ){
      return {
        id: user.id,
        avatar: user.avatar,
        steamId: user.steamId,
        username: user.username,
        role: user.role,
        balance: user.balance
      }
    }

    return null;
  }

  @Post()
  async createUser(@Body() userDto: CreateUserDto) : Promise<CreateUserResponseDto> {
    const createUserResponse = new CreateUserResponseDto();
    try {
      const user = this.userFactoryService.createNewUser(userDto);
      const createdUser = await this.userUseCases.createUser(user);

      createUserResponse.success = true;
      createUserResponse.createdUser = {
        id: createdUser.id,
        steamId: createdUser.steamId,
        username: createdUser.username,
        avatar: createdUser.avatar,
        role: createdUser.role,
        balance: createdUser.balance
      }
    } catch (error) {
      createUserResponse.success = false;
    }

    return createUserResponse;
  }


  // @Put(':id')
  // updateUser(
  //   @Param('id') userId: string,
  //   @Body() updateUserDto: UpdateUserDto,
  // ) {
  //   const user = this.userFactoryService.updateUser(updateUserDto);
  //   return this.userUseCases.updateUser(userId, user);
  // }
}