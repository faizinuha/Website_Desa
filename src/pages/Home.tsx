import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const latestNews = [
    {
      id: 1,
      title: 'Musyawarah Desa Tentang Pembangunan Jalan',
      date: '2025-06-15',
      excerpt:
        'Akan dilaksanakan musyawarah desa untuk membahas rencana pembangunan jalan di RT 03/RW 02.',
      image:
        'https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // gambar rapat/musyawarah
      category: 'Musyawarah',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      title: 'Program Bantuan Sembako',
      date: '2025-06-10',
      excerpt:
        'Distribusi bantuan sembako untuk keluarga kurang mampu akan dimulai minggu depan.',
      image:
        'https://images.unsplash.com/photo-1606788075761-9c3e1c7c7b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // gambar sembako
      category: 'Bantuan',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      title: 'Gotong Royong Pembersihan Sungai',
      date: '2025-06-08',
      excerpt:
        'Kegiatan gotong royong pembersihan sungai diikuti oleh 150 warga desa dengan antusias.',
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // gambar kerja bakti sungai
      category: 'Gotong Royong',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
  ];

  const services = [
    {
      title: 'Surat Keterangan',
      description:
        'Pengurusan berbagai surat keterangan resmi untuk keperluan administrasi',
      icon: '📄',
      image:
        'https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Populer',
    },
    {
      title: 'Surat Domisili',
      description:
        'Surat keterangan tempat tinggal untuk keperluan identitas resmi',
      icon: '🏠',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Cepat',
    },
    {
      title: 'Surat Usaha',
      description: 'Surat keterangan usaha untuk UMKM dan pengembangan bisnis',
      icon: '💼',
      image:
        'https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'UMKM',
    },
    {
      title: 'Bantuan Sosial',
      description: 'Informasi dan pendaftaran bantuan untuk masyarakat',
      icon: '🤝',
      image:
        'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'Prioritas',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with Village Background */}
 <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Beautiful village landscape" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-green-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Selamat Datang di Desa Ampelan
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Portal resmi Desa Ampelan - Melayani dengan sepenuh hati untuk kemajuan desa dan kesejahteraan masyarakat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 text-green-800 hover:bg-yellow-400 font-semibold hover-scale">
                Layanan Online
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 hover-scale">
                Tentang Desa
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style >{`
        @keyframes ken-burns {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
      `}</style>

      {/* Stats Section with Beautiful Icons */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover-scale">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">2,543</h3>
              <p className="text-gray-600">Jumlah Penduduk</p>
            </div>
            <div className="text-center group hover-scale">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">12</h3>
              <p className="text-gray-600">RT/RW</p>
            </div>
            <div className="text-center group hover-scale">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">25</h3>
              <p className="text-gray-600">Kegiatan/Bulan</p>
            </div>
            <div className="text-center group hover-scale">
              <div className="bg-gradient-to-br from-red-400 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Bell className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">150+</h3>
              <p className="text-gray-600">Layanan Online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Beautiful Cards */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Desa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai layanan administrasi dan kemasyarakatan untuk memudahkan
              warga desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover-scale bg-white/80 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-yellow-500 text-green-900 text-xs font-bold px-2 py-1 rounded-full shadow">
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 text-2xl p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <CardHeader className="relative">
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 text-sm text-center">
                    {service.description}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 hover:text-green-700 hover:bg-green-50"
                    >
                      Ajukan Sekarang →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section with Beautiful Images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Berita & Kegiatan Terbaru
              </h2>
              <p className="text-lg text-gray-600">
                Informasi terkini seputar kegiatan dan pengumuman desa
              </p>
            </div>
            <Link to="/news">
              <Button variant="outline" className="hover-scale">
                Lihat Semua
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <Card
                key={news.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group hover-scale bg-white"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <img
                      src={news.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full border-2 border-white shadow"
                    />
                    <span className="text-xs bg-green-600 px-2 py-1 rounded text-white font-semibold shadow">
                      {news.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-green-600 px-2 py-1 rounded">
                      {new Date(news.date).toLocaleDateString('id-ID')}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-green-600 transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{news.excerpt}</p>
                  <Button
                    variant="link"
                    className="p-0 mt-2 text-green-600 hover:text-green-700 story-link"
                  >
                    Baca selengkapnya →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Background Image */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Village community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bergabunglah dengan Komunitas Digital Desa Ampelan
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Daftarkan diri Anda untuk mendapatkan akses ke layanan online dan
            informasi terbaru dari desa
          </p>
          <Link to="/register">
            <Button
              size="lg"
              className="bg-yellow-500 text-green-800 hover:bg-yellow-400 font-semibold hover-scale"
            >
              Daftar Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
