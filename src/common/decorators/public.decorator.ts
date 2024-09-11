import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = 'isPublic'
/**
 * @description This is a decorator that  allow endpoints to be publicly accessible 
 * @returns 
 */
export const Public =() => SetMetadata(IS_PUBLIC_KEY, true)