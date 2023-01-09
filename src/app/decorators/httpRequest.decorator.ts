import { HttpClient } from "@angular/common/http"
import { Component, inject } from "@angular/core"

enum Method {
  get = "get",
  post = "post",
  patch = "patch",
  delete = "delete"
}

interface Request {
  url: string
  body?: unknown
  headers?: unknown
}

interface Response {
  data: unknown
  status: number
}

function httpRequest(method: string = Method.get, request: Request): Response {

  /* (this as any).http["get"]('https://fakestoreapi.com/products')
      .subscribe(data => {
        console.log(data)
      }) */

  if (method === Method.post) {
    return {
      data: {},
      status: 200
    }
  }
  return {
    data: [{ id: 1, title: "title", description: "description", image: "image" }],
    status: 200
  }
}

export const Get = (request: Request) => function (target: unknown, propertyKey: string): void {
  Object.defineProperty(target, propertyKey, {
    value: httpRequest(Method.get, request),
    writable: true,
    configurable: true,
  });
};

/* @Component({
  template: ''
})
export class HttpProvider {
  http = inject(HttpClient)

  ngOnInit() {
    this.http["get"]('https://fakestoreapi.com/products')
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
  }
} */
