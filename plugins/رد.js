let handler = m => m 
handler.all = async function (m) { 
    let chat = global.db.data.chats[m.chat]

    if (/^احا$/i.test(m.text)) { 
        conn.reply(m.chat, `*احــم احــم 😳*`, m)
        await conn.sendMessage(m.chat, { react: { text: '🐧', key: m.key } })
    }

    if (/^عبيط|يا عبيط$/i.test(m.text)) { 
        conn.reply(m.chat, `*تــنــمــر لــفــل ماكــس 😂*`, m)
    }

    if (/^منور|منوره$/i.test(m.text)) { 
        conn.reply(m.chat, `*ايــه الــنــور ده كــلــه 😘*`, m)
        await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key } })
    }

    if (/^😂$/i.test(m.text)) { 
        conn.reply(m.chat, `*تــدوم يــاض 😂*`, m)
    }

    if (/^كسمك$/i.test(m.text)) { 
        conn.reply(m.chat, `*عــيــب يــاض 🗿😭*`, m)
        await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
    }

    if (/^يابوت|يا بوت$/i.test(m.text)) { 
        conn.reply(m.chat, `*هممممم وش في انت كمان 🗿*`, m)
        await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
    }

    if (/^معطوب$/i.test(m.text)) { 
        conn.reply(m.chat, '*تــتــكلم عــن نــفــســك صـح؟ 😂*', m)
        await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
    }

    if (/^بوت خرا|بوت زفت|خرا عليك$/i.test(m.text)) { 
        conn.reply(m.chat, '*دزهــا يــاض 😂🗿*', m)
    }

    if (/^بحبك|احبك$/i.test(m.text)) { 
        conn.reply(m.chat, `*وانـا كـمـان 😂❤️*`, m)
    }

    if (/^بوت زق$/i.test(m.text)) { 
        conn.reply(m.chat, '*انــقــلــع بــس 😂💔*', m)
    }

    if (/^همممم/i.test(m.text)) { 
        conn.reply(m.chat, `*اعــوز بـي الله مــنــك 😂💔*`, m)
    }

    if (/^امزح|بهزر$/i.test(m.text)) { 
        conn.reply(m.chat, `*هــزر بــراحــتــك يــابــن قــلـبـي 😂❤️*`, m)
    }

    if (/^في ايه$/i.test(m.text)) { 
        conn.reply(m.chat, `*وربــنــا مــا اعــرف 🗿*`, m)
    }

    if (/^تست$/i.test(m.text)) { 
        conn.reply(m.chat, `*شــغــالــة يــا روحــي 🥰❤️*`, m)
    }

    if (/^صباح الخير$/i.test(m.text)) { 
        conn.reply(m.chat, `*صــبــاح الــنــور 😘❤️*`, m)
    }

    if (/^انا جيت$/i.test(m.text)) { 
        conn.reply(m.chat, `*مــنــور وربــنــا 😂❤️*`, m)
        await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
    }

    if (/^اخرس|اسكت$/i.test(m.text)) { 
        conn.reply(m.chat, `*اخــرس انــت 🗿💔*`, m)
    }

    if (/^حرامي|سارق$/i.test(m.text)) { 
        conn.reply(m.chat, `*اتهامك بالسرقة جهلك بالحقيقة 😂*`, m)
    }

    if (/^ملل|مللل|ملللل$/i.test(m.text)) { 
        conn.reply(m.chat, `*مـلــلــل جــدد 😃💔*`, m)
    }

    if (/^السلام عليكم |السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته$/i.test(m.text)) { 
        conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته ♥*`, m)
    }

    if (/^🤖$/i.test(m.text)) { 
        conn.reply(m.chat, `*هل انت بوت ياصحبي؟ 🗿*`, m)
    }

    if (/^🐤$/i.test(m.text)) { 
        conn.reply(m.chat, `🐤🐤🐤🐤🐤`, m)
    }

    if (/^اه$/i.test(m.text)) { 
        conn.reply(m.chat, `*الــشــارع الــي وراه 😂💔*`, m)
    }

    if (/^نعم$/i.test(m.text)) { 
        conn.reply(m.chat, `*حد ناداك؟ 🐦*`, m)
    }

    if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text)) { 
        conn.reply(m.chat, `*الحمد لله و انت 🐧؟*`, m)
    }

    if (/^تتجوزيني|تتجوزيني؟$/i.test(m.text)) { 
        conn.reply(m.chat, `*بــس يــعــم بــتــكــســف 😭💔*`, m)
    }
} 
export default handler
