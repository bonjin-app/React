import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";

export default {
    name: 'Gigas',
    title: 'Creative Developer',

    birthday: '31th December 2000',
    email: 'bonjin.app@gmail.com',
    address: '356 Tex ST',
    phone: '010-0000-0000',

    socials: {
        facebook: {
            text: 'GIGAS',
            link: '',
            icon: <Facebook/>,
        },
        twitter: {
            link: '',
            text: 'Twitter',
            icon: <Twitter/>
        },
        linkedIn: {
            link: '',
            text: 'LinkedIn',
            icon: <LinkedIn/>
        },
        github: {
            link: '',
            text: 'GitHub',
            icon: <GitHub/>
        }
    }

}