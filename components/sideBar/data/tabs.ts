import { FcBusinessman } from 'react-icons/fc'
import { FcBusinesswoman } from 'react-icons/fc'
import { FcElectronics } from 'react-icons/fc'
import { GiJewelCrown } from 'react-icons/gi'
import { MdProductionQuantityLimits } from 'react-icons/md'
export   const tabs = [
    {
      name: "All",
      // image: Images.allIcon,
      desc: "all sorting icon",
      id: 1,
      icon: MdProductionQuantityLimits,
    },
    {
      name: "Electronics",
      // image: Images.documentsIcon,
      desc: "electronics sorting icon",
      id: 2,
      icon: FcElectronics,
    },
    {
      name: "Jewelery",
      // image: Images.musicFileIcon,
      desc: "jewelery sorting icon",
      id: 3,
      icon: GiJewelCrown,
    },
    {
      name: "Men's clothing",
      // image: Images.photosFileIcon,
      desc: "men's clothing sorting icon",
      id: 4,
      icon: FcBusinessman,
    },
    {
      name: "Women's clothing",
      // image: Images.videosIcon,
      desc: "women's clothing sorting icon",
      id: 5,
      icon: FcBusinesswoman,
    },
  ];