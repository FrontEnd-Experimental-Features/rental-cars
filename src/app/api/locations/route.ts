import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { createLocationData } from '../../../lib/search/locationData';

const locationData = createLocationData(db);

export async function GET(request: Request) {
  console.log('Locations API route hit:', request.method, request.url);

  const { searchParams } = new URL(request.url);
  const stateId = searchParams.get('stateId');

  try {
    if (stateId) {
      console.log('Fetching cities for state ID:', stateId);
      const cities = await locationData.getCitiesByState(Number(stateId));
      console.log('Fetched cities:', cities);
      return NextResponse.json(cities);
    } else {
      console.log('Fetching all states');
      const states = await locationData.getStates();
      console.log('Fetched states:', states);
      return NextResponse.json(states);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
  }
}
