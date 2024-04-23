import { Link } from 'react-router-dom'

import { Card } from '../../components'
import categories from '../../data/categories.json'
import menu from '../../data/menu.json'
import { MenuItem } from '../../types'

interface ItemMenuProps {
  className?: string
}

const ItemMenu = ({ className = '' }: ItemMenuProps) => {
  /* group menu items by category */
  const groupedMenuItems = menu.reduce<{ [key: string]: MenuItem[] }>((group, item) => {
    const category = categories.find((c) => c.id === item.categoryId)
    const categoryTitle = category?.title || 'Extras'

    if (!group[categoryTitle]) {
      group[categoryTitle] = []
    }
    group[categoryTitle].push(item)
    return group
  }, {})

  const menuItems = Object.keys(groupedMenuItems).map((category) => {
    return (
      <>
        <h2 className='subtitle'>{category}</h2>
        <div className='cards'>
          {groupedMenuItems[category].map((item) => {
            return (
              <Link key={item.title} to='/details'>
                <Card>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </>
    )
  })

  return (
    <section className={className}>
      {menuItems}
    </section>
  )
}

export { ItemMenu }
