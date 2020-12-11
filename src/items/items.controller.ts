import { Controller, Get, Put, Delete, Post, Param , Body, Req, Res } from '@nestjs/common';
import {CreateItemDto} from './itemsDTO/items.dto';
import {Request,Response} from 'express';

@Controller('items')
export class ItemsController {

    @Get()
    findAllItems():string{
        return `Fetching All Items`;
    }

    @Post()
    createItem(@Body() createItem:CreateItemDto):string{
        return `Item Created with name: ${createItem.name} and qty ${createItem.qty}`;
    }

    @Get(':id')
    getItemWithId(@Param('id') id):string{
        return `Item: ${id} `;
    }

    /* Method should not be used only for express not nest js style*/
    @Get(':id')
    updateItem(@Req() req:Request, @Res() res:Response):Response{
        return res.send('Just Testing')
    }

}
