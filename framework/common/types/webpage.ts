export interface topBarProps {
 
    fields:{
          position: string;
          id: number;
          link:string;
          name:string;
          icon:{
            fields:{
              file:{
                url:string
              }
            }
          }
    }
    
}

export interface iconLibrary {
 
  fields:{    
        name:string;    
        icon:{
          name:string;
          fields:{
            file:{
              url:string
            }
          }
        }
  }
}



export interface  homeProps  {
  topBar:  topBarProps[],
  menu: topBarProps[],
  iconLibrary: iconLibrary[],

}