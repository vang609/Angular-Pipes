import { Component } from "@angular/core";
import { interval, Observable, tap } from "rxjs";

@Component({
    selector: "app-uncommon-page",
    templateUrl: "./uncommon-page.component.html",
    styleUrls: ["./uncommon-page.component.css"],
})
export class UncommonPageComponent {
    // i18n Select
    public name: string = "Enrique";
    public gender: "male" | "female" = "male";
    public invitationMap = {
        male: "invite",
        female: "invite",
    };

    changeClient(): void {
        this.name = "Angy";
        this.gender = "female";
    }

    // i18nPlural
    public clients: string[] = [
        "Smurti",
        "Juan",
        "Enrique",
        "Elias",
        "Luis",
        "Angy",
        "Andrea",
    ];
    public clientsMap = {
        "=0": "No clientes waiting.",
        "=1": "one client waiting.",
        "=2": "two clients waiting.",
        other: " # clients waiting.",
    };

    deleteClient(): void {
        this.clients.shift();
    }

    // KeyValue Pipe
    public person = {
        name: "Enrique",
        age: 40,
        address: "Charlotte, NC",
    };

    // Async Pipe
    public myObservableTimer: Observable<number> = interval(2000).pipe(
        tap((value) => console.log("tap:", value))
    );

    public promiseValue: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data in the promise.");
            console.log("Data in the promise.");
            this.person.name = "Other name";
        }, 3500);
    });
}
