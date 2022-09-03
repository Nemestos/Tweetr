import { PrismaClient } from "@prisma/client";
import {randAvatar, randEmail, randFirstName, randNumber, randProductDescription, randRecentDate, randUserName} from "@ngneat/falso"
const prisma = new PrismaClient()

export function randomUrl():string{

    return Math.random().toString(16).slice(2)
}


function getTweets(count:number){

    const tweets:any[] =  []
    for (let i = 0; i < count; i++) {
        const tweet = {
            url:randomUrl(),
            posted:randRecentDate(),
            content: randProductDescription(),
            likes: randNumber({min:0,max:100})
        }
        tweets.push(tweet)
        
        
    }

    return tweets
}
function getUsers() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const users: any[]= []

    for (let i = 0; i < 10; i++) {
        const user= {
            name:randFirstName(),
            about:randProductDescription(),
            avatar:randAvatar(),
            email: randEmail(),
            handle: "@"+randUserName(),
            tweets:{
                create:getTweets(5)
            }

        }
        users.push(user)
        
    }
    return users
}


async function seed(){
    const users = getUsers()
    for (const user of users) {
        await prisma.user.create({data:user})
    }
}
seed()