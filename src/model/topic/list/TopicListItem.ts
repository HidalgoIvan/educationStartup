import { Icons } from '../../../components/contentElements/Icon/Icon';

export class TopicListItem {
  id: string;
  title: string;
  description: string;
  icon: Icons;

  constructor(id: string, title: string, description: string, icon: Icons) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.icon = icon;
  }
}
