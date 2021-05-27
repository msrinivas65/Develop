export interface post {
    id?: number,
    title: string,
    description: string;
}

export interface postInterfaceList {
    posts: post[];
}