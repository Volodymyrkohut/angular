import {Inject, Injectable} from "@angular/core";
import {LOCAL_STORAGE} from "@ng-web-apis/common";

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {

  }

  setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value)
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }

  getItem(key: string): string | null {
    return this.localStorage.getItem(key)
  }
}
