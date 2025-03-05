/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'test@gmail.com',
        firstName: 'first name',
        lastName: 'last name'
    }
});

console.log('done');