import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';

export async function GET() {
  try {
    const menuQuery = await db.query(`
      SELECT * FROM "OptionsHamburgerMenu" WHERE "IsActive" = true
    `);

    const subMenuQuery = await db.query(`
      SELECT * FROM "OptionsHamburgerSubMenu" WHERE "IsActive" = true
    `);

    const menuItems = menuQuery.rows;
    const subMenuItems = subMenuQuery.rows;

    const formattedMenu = menuItems.map(menuItem => ({
      id: menuItem.Id,
      title: menuItem.Name,
      items: subMenuItems
        .filter(subMenuItem => subMenuItem.SubMenu === menuItem.Id)
        .map(subMenuItem => ({
          label: subMenuItem.SubMenuOptions,
          href: `/${menuItem.Name.toLowerCase()}/${subMenuItem.SubMenuOptions.toLowerCase().replace(/\s+/g, '-')}`
        }))
    }));

    return NextResponse.json(formattedMenu);
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return NextResponse.json({ error: 'Failed to fetch menu data' }, { status: 500 });
  }
}
