import React from 'react';
import './LeadershipTeam.css';
import { useTranslation } from 'react-i18next';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

const LeadershipTeam: React.FC = () => {
  const { t } = useTranslation();
  const teamMembers: TeamMember[] = (t('leadershipTeam.members', { returnObjects: true }) as unknown) as TeamMember[];

  return (
    <section className="leadership-team">
      <div className="leadership-team__content">
        <h2 className="leadership-team__title">{t('leadershipTeam.title')}</h2>
        <div className="leadership-team__members">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div key={index} className="leadership-team__member">
              <img src={member.photo} alt={member.name} className="leadership-team__photo" />
              <h3 className="leadership-team__name">{member.name}</h3>
              <p className="leadership-team__role">{member.role}</p>
              <p className="leadership-team__bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
