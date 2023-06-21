export class TopicListItem {
  id: string;
  title: string;
  description: string;
  icon: string;

  constructor(id: string, title: string, description: string, icon: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.icon = icon;
  }
}
