import { MenuItem} from 'react-pro-sidebar';
import { menuClasses, useProSidebar} from 'react-pro-sidebar';
import { TextAlignerBox, AvatarWrapper, AvatarImage, LinkPetzeira } from '../../../../utils.css'
import { AvatarButtonOptions } from './avatarButton.css'


function AvatarButton() {
  const { toggled } = useProSidebar();
  
  return (
        <MenuItem
          rootStyles={{
            [`.${menuClasses.button}`]: {
              "&:hover": toggled && {
                backgroundColor: "#DDB00C !important",
                cursor:"default !important"
              },
            },
          }}
        >
          <TextAlignerBox>              
            <AvatarWrapper>
              <AvatarImage src="empty_avatar.png" />
            </AvatarWrapper>
            {toggled && 
              <AvatarButtonOptions>
                <LinkPetzeira to="/login" className="defaultLink">Login</LinkPetzeira>{' '}
                or{' '}
                <LinkPetzeira to="/register" className="defaultLink">Register</LinkPetzeira>
              </AvatarButtonOptions>
            }
          </TextAlignerBox>
        </MenuItem>
  );
}

export default AvatarButton;
