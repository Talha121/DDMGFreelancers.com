import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { IHttpConnectionOptions } from '@aspnet/signalr';

@Injectable({ providedIn: 'root' })
export class SignalrService {
    constructor(
        ) { }


    hubConnection:signalR.HubConnection;

    startConnection = () => {
      console.log(token);
        this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://markketin.com/signalServer', options)
        .build();
    
        this.hubConnection
        .start()
        .then(() => {
            console.log('Hub Connection Started!');
          
        })
        .catch(err => console.log('Error while starting connection: ' + err))
    }


    askServer() {
        this.hubConnection.invoke("askServer", "hi")
            .catch(err => console.error(err));
    }
    
    askServerListener() {
        this.hubConnection.on("askServerResponse", (someText) => {
            console.log(someText);
        })
    }
    
}
const options: IHttpConnectionOptions = {
  accessTokenFactory: () => {
    return token;
  },
  skipNegotiation: true,
  transport: signalR.HttpTransportType.WebSockets
};
const token=localStorage.getItem('token')