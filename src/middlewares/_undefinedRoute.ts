import {NextFunction, Request, Response} from 'express';
import {createMessage} from 'utils/index';

export const UndefinedRoute = ((req: Request , res: Response, next: NextFunction) => {
    next(createMessage(404,'Not Found'));
});