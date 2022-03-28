export class ServiceUtils{

    urlInsertOrUpdate:string;
    urlGet:string;
    apiKey: string

    constructor(apiKey: string){
        this.apiKey = apiKey; 
    }
    
    getResultData(result: any){
        const resultData = result.data;
        const {ErrorCode,Message} = resultData.ResponseStatus;
        if(ErrorCode != "0")
            return {"error":Message};
        return {"response":resultData};
    }
}