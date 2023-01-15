

export interface Course {
    id:number;
    description:string;
    iconUrl: string;
    longDescription: string;
    category:string;
    lessonsCount:number;
}

export const suzi: any = [

    {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    }];