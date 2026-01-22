import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { COUNTRIES } from '@/config/countries';

// Team data structure
const teamData = {
  groupExecutive: {
    name: "Mr. Nsikak Stanley Etim",
    title: "President & Group CEO",
    mandate: "Sets strategic direction across all markets and ensures capital allocation discipline",
    image: "/assets/TEAM-STANLEY.jpg"
  },
  
  countries: {
    ng: {
      name: "Nigeria",
      positioning: "Our largest operational market and execution hub",
      lead: {
        name: "Mr. Nsikak Stanley Etim",
        title: "Country Director & President",
        responsibility: "Full operational authority and strategic execution for Nigerian market",
        image: "/assets/TEAM-STANLEY.jpg"
      },
      team: [
        {
          name: "Dr. Mrs. Nnenna John A. Njoku",
          role: "Financial Controller",
          image: "/assets/TEAM.-NNENA.jpg"
        },
        {
          name: "Anthony Okon",
          role: "Director of Sales & Marketing",
          image: "/assets/TEAM-ANTHONY.jpg"
        },
        {
          name: "Arc. Rotimi Oluwaseun Oladele",
          role: "Architect & Building Design Developer",
          image: "/assets/TEAM-ROTIMI.jpg"
        },
        {
          name: "Donatus S. Dadwa",
          role: "Project Director, Nigeria",
          image: "/assets/TEAM.-DONATUS.jpg"
        },
        {
          name: "Olufemi Olutimehin",
          role: "Company Secretary/Legal Adviser",
          image: "/assets/TEAM-FEMI.jpg"
        },
        {
          name: "Mr. Ayoade",
          role: "Director of Operations / Project Director I, Africa",
          image: "/assets/TEAM-SULEIMAN.jpg"
        }
      ]
    },
    sl: {
      name: "Sierra Leone",
      positioning: "Strategic gateway for West African expansion",
      lead: {
        name: "Mr. Saidou Barrie",
        title: "Country Director",
        responsibility: "Leads company operations and market development in Sierra Leone",
        image: "/assets/TEAM-SULEIMAN.jpg" // Placeholder - using available image
      },
      team: [
        // Add Sierra Leone team members as they become available
      ]
    },
    bw: {
      name: "Botswana",
      positioning: "Southern Africa regional development center",
      lead: {
        name: "Leadership Position",
        title: "Country Director",
        responsibility: "Drives Botswana market development and regional coordination",
        image: "/assets/TEAM-STANLEY.jpg" // Placeholder
      },
      team: [
        // Add Botswana team members as they become available
      ]
    },
    bf: {
      name: "Burkina Faso",
      positioning: "Francophone West Africa strategic entry point",
      lead: {
        name: "Leadership Position",
        title: "Country Director", 
        responsibility: "Leads Francophone market development and operations",
        image: "/assets/TEAM-STANLEY.jpg" // Placeholder
      },
      team: [
        // Add Burkina Faso team members as they become available
      ]
    }
  },

  advisory: [
    {
      name: "Board Member",
      title: "Strategic Advisor",
      expertise: "Infrastructure Finance & Development"
    },
    {
      name: "Board Member", 
      title: "Strategic Advisor",
      expertise: "Urban Planning & Policy"
    }
  ]
};

const Leadership = () => {
  return (
    <Layout>
      {/* Hero Section - Leadership Philosophy */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h30v30H0V0zm15 25.5a10.5 10.5 0 1 0 0-21 10.5 10.5 0 0 0 0 21z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-8 bg-slate-800 text-slate-300 border-slate-700">
              Institutional Leadership
            </Badge>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-8">
              Leadership with Local Authority<br/>and Global Discipline
            </h1>
            
            <p className="font-serif text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Our leadership model combines centralized vision with empowered country representation to ensure consistency, accountability, and cultural intelligence across markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Group Executive Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Group Executive Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Centralized strategic authority with clear accountability
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-8">
                <img 
                  src={teamData.groupExecutive.image}
                  alt={teamData.groupExecutive.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-slate-200"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-slate-900 text-white">Group CEO</Badge>
                </div>
              </div>
              
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-3">
                {teamData.groupExecutive.name}
              </h3>
              
              <div className="text-slate-600 font-medium mb-6">
                {teamData.groupExecutive.title}
              </div>
              
              <p className="text-slate-600 leading-relaxed max-w-lg mx-auto">
                {teamData.groupExecutive.mandate}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Country Leadership Blocks */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Regional & Country Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Clear authority structures with empowered local representation
            </p>
          </motion.div>

          <div className="space-y-20">
            {Object.entries(teamData.countries).map(([countryCode, country], index) => {
              const countryConfig = COUNTRIES.find(c => c.code === countryCode);
              
              return (
                <motion.div
                  key={countryCode}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Country Header */}
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-3xl">{countryConfig?.flag}</span>
                      <h3 className="font-serif text-3xl font-medium text-slate-900">
                        {country.name}
                      </h3>
                    </div>
                    <p className="text-slate-600 italic">
                      {country.positioning}
                    </p>
                  </div>

                  {/* Country Lead */}
                  <div className="max-w-2xl mx-auto mb-12">
                    <Card className="border-slate-200 bg-white shadow-sm">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="relative">
                            <img 
                              src={country.lead.image}
                              alt={country.lead.name}
                              className="w-32 h-32 rounded-full object-cover border-3 border-slate-200"
                            />
                            <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs">
                              Country Lead
                            </Badge>
                          </div>
                          
                          <div className="text-center md:text-left flex-1">
                            <h4 className="font-serif text-xl font-medium text-slate-900 mb-2">
                              {country.lead.name}
                            </h4>
                            <div className="text-slate-600 font-medium mb-3">
                              {country.lead.title}
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {country.lead.responsibility}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Country Team Grid */}
                  {country.team.length > 0 && (
                    <div>
                      <h4 className="font-serif text-xl font-medium text-slate-900 text-center mb-8">
                        Country Team
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {country.team.map((member, memberIndex) => (
                          <motion.div
                            key={memberIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: memberIndex * 0.05 }}
                          >
                            <Card className="border-slate-200 bg-white hover:shadow-md transition-shadow">
                              <CardContent className="p-6 text-center">
                                <img 
                                  src={member.image}
                                  alt={member.name}
                                  className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-slate-100"
                                />
                                <h5 className="font-medium text-slate-900 text-sm mb-2">
                                  {member.name}
                                </h5>
                                <div className="text-xs text-slate-600">
                                  {member.role}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Across Borders */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 mb-8">
              How We Work Across Borders
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-xl">🎯</div>
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Central Standards</h4>
                <p className="text-sm text-slate-600">
                  Unified quality, design, and operational benchmarks across all markets
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-xl">🏗️</div>
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Local Execution</h4>
                <p className="text-sm text-slate-600">
                  Empowered country teams with deep market knowledge and cultural intelligence
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-xl">⚖️</div>
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Shared Governance</h4>
                <p className="text-sm text-slate-600">
                  Consistent decision-making frameworks with clear accountability structures
                </p>
              </div>
              
              <div>
                <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-xl">✅</div>
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Unified Quality</h4>
                <p className="text-sm text-slate-600">
                  Single standard of excellence regardless of geographic location
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 text-center mb-16">
              Advisory & Board Oversight
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {teamData.advisory.map((advisor, index) => (
                <Card key={index} className="border-slate-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-6">
                      <div className="text-2xl text-slate-500">👔</div>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-slate-900 mb-2">
                      {advisor.name}
                    </h4>
                    <div className="text-slate-600 font-medium mb-3">
                      {advisor.title}
                    </div>
                    <div className="text-sm text-slate-500 italic">
                      {advisor.expertise}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;