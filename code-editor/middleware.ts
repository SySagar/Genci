import { NextResponse } from 'next/server';
import userSession from './app/lib/utils/session'

export default function middleware() {

    userSession();

  if (!userSession) {
    return NextResponse.redirect('/auth/login');
  }

  return NextResponse.next();
}