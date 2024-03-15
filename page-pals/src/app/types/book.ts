


// export interface Book {
//     subscribers: string[];
//     posts: any; //string[] | Post[];
//     _id: string;
//     name: string;
//     userId: UserId;
//     created_at: string;
//     updatedAt: string;
//     __v: number;
// }


export interface Book {

    author: string;
    _id: string;
    title: string;
  
    description: string;
    _ownerId: string,
    _createdOn: string;
    
    photo: string,
    comments: [],
}