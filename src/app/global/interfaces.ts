
export interface IallPost{
    userId: number,
    id : number,
    title: string,
    body: string
}

export interface IInitialState{
    list: IallPost[]
}

export interface IModalEditPost{
    modal: IModalContain;
    changeState: any;
    showHeader: boolean;
    post: IallPost | null,
  }

export interface IModalContain{
    open: boolean,
    post: IallPost | null,
  }
  
