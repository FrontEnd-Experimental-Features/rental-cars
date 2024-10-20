import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { createLocationData } from '../../../lib/search/locationData';

const locationData = createLocationData(db);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ suggestions: [] });
  }

  try {
    const suggestions = await locationData.getLocationSuggestions(query);
    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return NextResponse.json({ message: 'Error fetching suggestions' }, { status: 500 });
  }
}
