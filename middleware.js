import { NextResponse } from "next/server";

export function middleware(request) {
    // console.log(request);
    const { pathname } = request.nextUrl;
    console.log(pathname);
    
    
    return NextResponse.next();
}