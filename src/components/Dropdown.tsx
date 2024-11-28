import { useEffect, useRef, useState } from "react";
import { CheckSquare, MinusSquare, PlusSquare, Square, XSquare, Selection, ArrowSquareLeft, ArrowSquareUpLeft, ArrowSquareUp, Warning, ArrowSquareDownLeft, Check, Timer } from "@phosphor-icons/react";
import { useAppSelector } from "@/store";
import { createPortal } from "react-dom";


export interface DropdownItemInterface {
  value: string;
  label: string;
  url: string;
  status: string;
}

/*
  * Dropdown Element
  * 
  */

type DropdownElementProps = {
  element: DropdownItemInterface;
  buttonText: boolean;
  iconSize: number;
  type: string;
  selected: boolean;
  size: number;
}

const DropdownElement = ({ element, buttonText, iconSize, type, selected, size = 0 }: DropdownElementProps) => {

  const statusIcon = (value: string, size: number) => {
    if (value === 'Backlog') {
      return <Selection className="text-gray-400" size={size} weight="bold" />
    } else if (value === 'Todo') {
      return <Square className="text-orange-400" size={size} weight="bold" />
    } else if (value === 'In Progress') {
      return <MinusSquare className="text-blue-600" size={size} weight="bold" />;
    } else if (value === 'Review') {
      return <PlusSquare className="text-purple-500" size={size} weight="bold" />
    } else if (value === 'Completed') {
      return <CheckSquare className="text-green-600" size={size} weight='fill' />;
    }
    return <XSquare className="text-red-600" size={size} weight="bold" />
  }

  const priorityIcon = (priority: string, size: number): React.ReactNode => {
    
    switch (priority) {
      case 'Low':
        return <ArrowSquareLeft className='text-zinc-500' size={size} weight="bold" />
      case 'Medium':
        return <ArrowSquareUpLeft className='text-zinc-600' size={size} weight="bold" />
      case 'High':
        return <ArrowSquareUp className='text-zinc-700' size={size} weight="bold" />
      case 'Urgent':
        return <Warning className='text-red-400' size={size} weight="fill" />
      default:
        return <ArrowSquareDownLeft className='text-zinc-400' size={size} weight="bold" />
    }
  }

  const userAvatar = (url: string, status: string) => {
  
    const onlineStatus = (status: string) => {
      if (status === 'Online') {
        return 'bg-green-500';
      } else if (status === 'Away') {
        return 'bg-yellow-500';
      } else if (status === 'Busy') {
        return 'bg-red-500';
      }
      return 'bg-gray-400';
    }

    return (
      <div className="relative inline-block">
        <img className="w-4 h-4 rounded-full" src={url}></img>
        <span className={`absolute -bottom-1 -right-1 block w-2.5 h-2.5 border-2 border-white rounded-full ${onlineStatus(status)}`}></span>
      </div>
    )
  }

  // const sprintIcon = (status: string, size: number) => {
  //   return (
  //     <div className="w-5 h-5 flex items-center justify-center">
  //       <CaretCircleDoubleRight size={16} weight="bold" />
  //     </div>
  //   )
  // }

  const projectIcon = (icon: string) => {
    return (
      <div className="w-5 h-5 flex items-center justify-center">
        {icon}
      </div>
    )
  }

  return (
    <div className={
      `flex items-center
        ${buttonText === true 
          ? 'justify-between'
          : 'justify-center'
        }
        ${size === 0 ? 'gap-1' : 'gap-2'}
      `}
    >
      <div className={
        `flex items-center text-zinc-600
          ${size === 0 
            ? 'gap-1' 
            : 'gap-2'}
        `
      }>
        <div className="w-5 h-5 flex items-center justify-center">
          { type === 'task-status' && statusIcon(element.value, iconSize) }
          { type === 'priority' && priorityIcon(element.value, iconSize) }
          { type === 'estimate' && <Timer size={iconSize} weight="bold" /> }
          {/* { type === 'sprint' && sprintIcon(element.status, iconSize )} */}
          { type === 'project' && projectIcon(element.url) }
          { type === 'assignee' && userAvatar(element.url, element.status) }
        </div>
        {buttonText && 
          <div className={
            `flex-1 min-w-0 text-zinc-500 overflow-hidden text-ellipsis whitespace-nowrap antialiased
              ${size === 0 ? 'text-xs font-normal' : 'text-sm font-medium'}
            `
          }>
            {element.label}
          </div> 
        }
      </div>
      {selected && 
        <div className="w-4">
          <Check size={16} weight="bold" className="text-zinc-600"/>
        </div>
      }
    </div>
  )
}

export interface DropdownWithIconProps {
  selected: string;
  buttonText: boolean;
  type: string;
  size?: number;
}

export const DropdownWithIcon = ({ selected, buttonText, type, size = 0 }: DropdownWithIconProps) => {
  const [select, setSelect] = useState(selected);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);


  //list of dropdown items
  let list = Array<{ value: string, label: string, url: string, status: string }>();
  switch (type) {
    case 'assignee':
      list = useAppSelector(state => state.users.data);
      break;
    case 'project':
      list = useAppSelector(state => state.projects.data).map(p => {
        return { value: p.id, label: p.title.split(' ').splice(1).join(' '), url: p.title.split(' ')[0], status: '' };
      });
      break;
    case 'task-status':
      list = ["Backlog", "Todo", "In Progress", "Review", "Completed", "Canceled"].map(s => {
        return { value: s, label: s, url: '', status: '' };
      });
      break;
    case 'priority':
      list = ["No priority", "Urgent", "High", "Medium", "Low"].map(s => {
        return { value: s, label: s, url: '', status: '' };
      });
      break;
    case 'estimate':
      list = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10].map(s => {
        return { value: s.toString(), label: s.toString() + `${s === 1 ? ' point' : ' points'}`, url: '', status: '' };
      });
      break;
    default:
      list = [];
  }

  const [activeIndex, setActiveIndex] = useState(list.findIndex(l => l.value === selected));

  const iconSize = 16;

  const handleToggle = () => {
    if (isOpen) {
      setSearch('');
      setIsOpen(false);
    } else {
      if (buttonRef.current) {

        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.top, // Account for scrolling
          left: rect.left - window.scrollX - 224 - 8, // Account for scrolling
        });

        console.log("top", rect.top, "left:", rect.left - window.scrollX - 192);
      }
      setIsOpen(true);
    }
  };

  // Close dropdown when clicking outside
  const handleClose = () => {
    setSearch('');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResizeOrScroll = () => {
      if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    };

    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll);

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, [isOpen]);

  const handleKeyDown = (event: { key: any; preventDefault: () => void; }) => {
    if (!isOpen) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % list.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
        break;
      case "Enter":
        if (activeIndex >= 0) {
          handleSelect(list[activeIndex].value);
          handleClose();
        }
        break;
      case "Escape":
        handleClose();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex]);


  const handleSelect = (value: string) => {
    setActiveIndex(list.findIndex(l => l.value === value));
    setSelect(value);
    setIsOpen(false);
  };

  const placeholderText = (type: string) => {
    switch (type) {
      case 'task-status':
        return 'Change status...';
      case 'priority':
        return 'Set priority...';
      case 'estimate':
        return 'Change estimate...';
      case 'assignee':
        return 'Assign to...';
      default:
        return 'Select';
    }
  }

  return (
    <div className="relative inline-block text-left">
      {/* <!-- Dropdown Toggle Button --> */}
      <button 
        ref={buttonRef}
        id="dropdownButton" 
        className={`rounded border-0 items-center bg-white hover:bg-zinc-100 focus:outline-1 focus:outline-blue-500 
          ${isOpen ? 'bg-zinc-100' : ''}
          ${size === 0 ? 'p-1' : 'btn btn-ghost btn-sm'}
        `}
        onClick={handleToggle}>
        <DropdownElement 
          element={list.find(l => l.value === select) || { value: '', label: '', url: '', status: '' }} 
          buttonText={buttonText} 
          iconSize={iconSize} 
          type={type} 
          selected={false} 
          size={size}/>
      </button>

      {/* <!-- Dropdown Menu in Portal --> */}
      {
        isOpen && createPortal(
          <div
            onClick={handleClose} // Close dropdown when clicking outside
            className="fixed inset-0 z-40 bg-transparent"
          >
            {dropdownPosition && (
              <div
                ref={dropdownRef}
                style={{
                  position: "absolute",
                  top: dropdownPosition.top,
                  left: dropdownPosition.left,
                }}
                className="max-h-80 flex flex-col w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50"
              >
                <input 
                  className="py-2 px-4 text-sm border-gray-200 border-b rounded-t-lg w-full bg-white outline-none"
                  placeholder={placeholderText(type)}
                  onChange={(event) => setSearch(event.target.value)}
                  onClick={(event) => event.stopPropagation()}
                  autoFocus
                />
                <ul className="space-y-2 h-full w-full p-2 flex-1 overflow-y-auto">
                  {
                    list.filter(v => v.label.toLowerCase().includes(search.toLowerCase())).map((s, index) =>
                      <div 
                        className={`w-full p-2 rounded
                          ${
                            index === activeIndex
                              ? "bg-zinc-100"
                              : ""
                          }
                        `}
                        key={s.value} 
                        onClick={() => handleSelect(s.value)}
                        onMouseEnter={() => setActiveIndex(index)}
                      >
                        <DropdownElement 
                          element={s} 
                          buttonText={true} 
                          iconSize={iconSize} 
                          type={type} 
                          selected={s.value === select}
                          size={1} />
                      </div>
                    )
                  }
                </ul>  
              </div>
             )}
          </div>
          , document.body)
      }
    </div>
  )
}