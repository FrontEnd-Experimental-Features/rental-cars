import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { createCarData } from '../../../lib/search/carData';

const carData = createCarData(db);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dataType = searchParams.get('type');

  try {
    if (dataType === 'types') {
      const types = await carData.getCarTypes();
      return NextResponse.json(types);
    } else if (dataType === 'categories') {
      const categories = await carData.getCarCategories();
      return NextResponse.json(categories);
    } else {
      return NextResponse.json({ message: 'Invalid data type requested' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error fetching car data:', error);
    return NextResponse.json({ message: 'Error fetching car data' }, { status: 500 });
  }
}
