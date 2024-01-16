import { ChevronDown, ChevronRight, CircleDashed } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface MenuItem {
  label: string
  href?: string
  subitems?: MenuItem[]
}
interface MenuProps {
  menuItems: MenuItem[]
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const handleExpand = (label: string) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === label ? null : label,
    )
  }

  const isExpanded = (label: string) => expandedItem === label

  return (
    <div className="py-1 text-sm w-full min-h-[27px] text-muted-foreground font-medium ">
      {menuItems.map((item) => (
        <div
          className="cursor-pointer py-[1px] transition-all"
          key={item.label}
        >
          {item.subitems ? (
            <>
              <div role="button" onClick={() => handleExpand(item.label)}>
                <div className="hover:bg-primary/5 hover:text-black dark:hover:text-white ">
                  <div className=" flex items-center h-full ml-3 ">
                    {isExpanded(item.label) ? (
                      <ChevronDown className="h-4 w-4 mr-1 shrink-0 text-muted-foreground/50" />
                    ) : (
                      <ChevronRight className="h-4 w-4 mr-1 shrink-0 text-muted-foreground/50" />
                    )}
                    <span className="text-sm truncate ">{item.label}</span>
                  </div>
                </div>
              </div>
              {isExpanded(item.label) && (
                <div
                  key={item.label}
                  className=" text-muted-foreground font-medium"
                >
                  {item.subitems.map((subitem) => (
                    <Link key={subitem.label} href={subitem.href!}>
                      <div className="hover:bg-primary/5 hover:text-black dark:hover:text-white py-[1px]">
                        <div className="ml-10 truncate">
                          <span className="text-sm">{subitem.label}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            // Si no hay submenu, solo renderizar el elemento del menú
            <div>
              <Link href={item.href!}>
                <div className=" hover:bg-primary/5 hover:text-black dark:hover:text-white">
                  <div className="truncate ml-3 flex items-center h-full ">
                    <CircleDashed className="h-4 w-4 mr-1 shrink-0 text-muted-foreground/50" />
                    <span className="truncate text-sm">{item.label}</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Menu
