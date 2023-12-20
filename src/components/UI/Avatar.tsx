import  { useState,useRef,useEffect } from 'react';

function AvatarTooltip({ userEmail ,photoUrl,signOut}:{userEmail:string|null,photoUrl:string|null,signOut:()=>void}) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null)
  const handleTooltipToggle = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  const handleClickOutside = (event:MouseEvent) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
      setIsTooltipOpen(false);
    }
  };



  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="group relative" ref={tooltipRef}>
      <img
        referrerPolicy='no-referrer'
        className="w-12 h-12 rounded-full border border-gray-300 cursor-pointer"
        src={photoUrl?photoUrl:"https://th.bing.com/th/id/OIG.yaQITzlY8B7C0fk72a7y?pid=ImgGn"}
        onClick={handleTooltipToggle}
      />
      {isTooltipOpen && (
        <div className="absolute z-50 bg-white shadow-md rounded-md py-2 px-4 mt-4 -translate-y-4">
          <p className="text-sm text-black">{userEmail}</p>
          <button className="text-blue-500 hover:text-blue-700" onClick={signOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default AvatarTooltip;
