import {NextFunction, Request, Response} from 'express';
import {IMsg} from 'types/index';

export const ErrorHandler = ((err: IMsg, req: Request, res: Response) => {
    res.status(err.status || 500);
    res.json(err);
});
